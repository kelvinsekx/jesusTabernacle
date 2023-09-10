import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckIcon } from "lucide-react"
import React from "react"
import { Description } from "../Description"

import Image from 'next/image'

export function GiveDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <header className="text-white px-2 h-full bg-tb-green flex items-center">GIVE</header>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="text-tb-black text-3xl md:text-4xl py-2 self-center">Make a Donation</DialogTitle>
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
              <AccountCard name='Cashapp' src='/cashapp-logo.png'></AccountCard>
              <AccountCard name='Zelle'></AccountCard>
              <AccountCard name='Credit Card'></AccountCard>
            </div>
            <div className="py-4">
              <p className="font-bold text-tb-grey2">Cashapp</p>
              <p>You can make payments to the account info below</p>
              <div className="text-tb-grey2 font-bold text-lg">9196413832 -$Jesustabernacle2</div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button>God bless you...</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const GLabel: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({children})=><div className="py-1 px-5 md:py-2 md:px-10 flex items-center justify-center bg-tb-ash/30">
{children}
</div>

GiveDialog.Label = GLabel

const AccountCard: React.FC<React.ComponentPropsWithoutRef<'div'> & {name: string, src?: string}> = ({name, src='/zelle-logo.png'})=>  <div className="flex">
  <div className="flex w-52 md:w-36 border-2 hover:border-tb-green p-2">
    <div className="relative h-8 w-12"> <Image src={src} fill alt='zelle logo' /></div>
    <div className="w-full h-full flex items-center justify-center">
      <span>{name}</span>
    </div>
  </div>
  <span className="h-4 w-4 border-2 bg-tb-green rounded-full flex items-center justify-center relative bottom-2"><CheckIcon className="text-white w-4 h-4" /></span>
</div>

GiveDialog.AccountCard = AccountCard
