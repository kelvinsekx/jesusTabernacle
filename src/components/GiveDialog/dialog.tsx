'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CheckIcon } from "lucide-react"
import React from "react"
import { Description } from "../Description"

import Image from 'next/image'
import clsx from "clsx"

export function GiveDialog() {
  const [acc, setAcc] = React.useState(0)
  const accountDetails = ['9196413832 or $Jesustabernacle2', '9196413832', 'feature is coming...'];

  const accountType = (acc == 0) ? 
                        "Cashapp" : (
                          (acc == 1) ? 
                            "Zelle" : "Card"
                        )
  return (
    <Dialog>
      <DialogTrigger asChild>
        <header className="text-white px-4 h-full bg-tb-green flex items-center">
          GIVE
        </header>
      </DialogTrigger>
      <DialogContent className=" border-white border-2">
        <DialogHeader>
          <DialogTitle className="text-tb-black text-3xl md:text-4xl py-2 self-center">
            Make a Donation
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 text-tb-ash text-base">
          <div>
            <div className="pb-4">What would you like to give for?</div>
            <div className="flex gap-4">
              <GiveDialog.Label>
                <Description>Offering</Description>
              </GiveDialog.Label>
              <GiveDialog.Label>
                <Description>Tithe</Description>
              </GiveDialog.Label>
              <GiveDialog.Label>
                <Description>Others</Description>
              </GiveDialog.Label>
            </div>
          </div>
          <div>
            <div className="pb-4">Select payment method:</div>
            <div className="flex flex-col md:flex-row gap-4">
              <AccountCard
                name="Cashapp"
                src="/cashapp-logo.png"
                active={acc == 0}
                onClick={() => setAcc(0)}
              ></AccountCard>
              <AccountCard
                name="Zelle"
                active={acc == 1}
                onClick={() => setAcc(1)}
              ></AccountCard>
              <AccountCard
                name="Card"
                active={acc == 2}
                onClick={() => setAcc(2)}
              ></AccountCard>
            </div>
            <div className="py-4">
              <p className="font-bold text-tb-grey2">{accountType}</p>
              <p>You can make payments to the account info below</p>
              <div className="text-tb-grey2 font-bold text-lg">
                {accountDetails[acc]}
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button>God bless you...</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const GLabel: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({children})=><div className="py-1 px-2 sm:px-5 md:py-2 md:px-10 flex items-center justify-center bg-tb-ash/30">
{children}
</div>

GiveDialog.Label = GLabel

const AccountCard: React.FC<
  React.ComponentPropsWithoutRef<"div"> & {
    name: string;
    src?: string;
    active?: boolean;
  }
> = ({ name, src = "/zelle-logo.png", active = false, onClick }) => (
  <div className="flex cursor-default" onClick={onClick}>
    <div className={clsx(
      "flex w-52 md:w-36 border-2 rounded  p-2",
      {"border-tb-green text-tb-green font-bold": active}
      )}>
      <div className="relative h-8 w-12">
        {" "}
        <Image src={src} fill alt="zelle logo" />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <span>{name}</span>
      </div>
    </div>
    {active ?  (
      <span className="h-4 w-4 border-2 bg-tb-green rounded-full flex items-center justify-center relative bottom-2 right-1">
        <CheckIcon className="text-white w-4 h-4" />
      </span>
    ) : null}
  </div>
);

GiveDialog.AccountCard = AccountCard
