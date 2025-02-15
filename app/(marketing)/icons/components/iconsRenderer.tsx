"use client";
import IconCard from "@/components/iconCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { baseUrl } from "@/lib/axiosConfig";
import { iconTypes } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const IconsRenderer = () => {
  const [platform, setPlatform] = useState<
    "ALL" | "WINDOWS" | "MACOS" | "OTHER" | ""
  >("");
  const [query, setQuery] = useState<string>("");
  const initialQueryHandler = useRef<boolean>(true);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const fetchIcons = async (pageParams: any) => {
    try {
      const res = await axios.get(
        `${baseUrl}/icons?page=${pageParams}&platform=${platform}&q=${query}`
      );
      return res.data.icons;
    } catch (e) {}
  };

  const {
    data,
    isFetched,
    isFetching,
    hasNextPage,
    isError,
    fetchNextPage,
    refetch,
  } = useInfiniteQuery({
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    queryKey: ["allIconsQuery"],
    queryFn: async ({ pageParam }) => {
      return await fetchIcons(pageParam);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage: any, pages) => {
      if (lastPage) {
        return lastPage.length >= 24 ? pages.length + 1 : undefined;
      }
      return undefined;
    },
  });
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
    return () => {};
  }, [inView]);

  useEffect(() => {
    if (platform !== "") {
      refetch();
    }
  }, [platform]);

  useEffect(() => {
    if (!initialQueryHandler.current) {
      const delayDebounceFn = setTimeout(() => {
        refetch();
      }, 1000);

      return () => clearTimeout(delayDebounceFn);
    } else if (query !== "") {
      initialQueryHandler.current = false;
      refetch();
    }
  }, [query]);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-lg font-bold hidden md:block">Icons</h1>
        <div className="flex gap-2">
          <Input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Photoshop"
          />
          <Button size={"sm"} variant={"secondary"}>
            <Search width={15} height={15} onClick={() => refetch()} />
          </Button>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => {
            setPlatform("ALL");
          }}
          className={` text-sm  hover:text-foreground duration-300 ${
            platform === "ALL" || platform === ""
              ? "underline text-foreground"
              : "text-foreground/60"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setPlatform("WINDOWS")}
          className={` ${
            platform === "WINDOWS"
              ? "underline text-foreground"
              : "text-foreground/60"
          } text-sm  hover:text-foreground duration-300`}
        >
          Windows
        </button>
        <button
          onClick={() => setPlatform("MACOS")}
          className={` ${
            platform === "MACOS"
              ? "underline text-foreground"
              : "text-foreground/60"
          } text-sm  hover:text-foreground duration-300`}
        >
          Mac Os
        </button>
      </div>
      <div className="mt-3">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6">
          {data
            ? data.pages.map((page: iconTypes[], index: number) => (
                <React.Fragment key={index}>
                  {page &&
                    page.map((icon, index) => {
                      if (page.length === index + 1) {
                        return (
                          <div key={icon.id} ref={ref}>
                            <IconCard icon={icon} />
                          </div>
                        );
                      } else {
                        return (
                          <div key={icon.id}>
                            <IconCard icon={icon} />
                          </div>
                        );
                      }
                    })}
                </React.Fragment>
              ))
            : null}
          {isFetching
            ? [...Array(12)].map((item, index) => (
                <div
                  key={index}
                  className="min-h-48 w-full bg-muted rounded-md animate-pulse"
                ></div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default IconsRenderer;
