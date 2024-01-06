"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import PlayGround from "./components/PlayGround";
import BaseIconChoiceModal from "./components/BaseIconChoiceModal";
import Link from "next/link";
import SidebarTopControls from "./components/SidebarTopControls";
import ExportButton from "./components/ExportButton";

// TODO: we can implement the resizable from the shadcn ui here for the left bar and right playground

const CreateIcon = () => {
  const [baseIconModalState, setBaseIconModalState] = useState(false);

  return (
    <>
      {baseIconModalState && (
        <BaseIconChoiceModal setBaseIconModalState={setBaseIconModalState} />
      )}
      <div className="h-screen flex-col flex">
        <header className="py-3 border-b px-3">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "inline-flex gap-2 text-foreground/60  "
            )}
          >
            <ArrowLeft size={15} /> Back
          </Link>
        </header>
        <div className="flex-1 grid grid-cols-5 h-full ">
          <div className="border-r p-3 flex flex-col ">
            <SidebarTopControls setBaseIconModalState={setBaseIconModalState} />
            <ExportButton />
          </div>
          <div className="bg-muted col-span-4 flex items-center justify-center">
            <div>
              <div className="bg-white">
                <PlayGround />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateIcon;
