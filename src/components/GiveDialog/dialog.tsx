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

export function GiveDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <header className="text-white px-2 h-full bg-tb-green flex items-center">GIVE</header>
      </DialogTrigger>
      <DialogContent className="w-fit">
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
            <div className="flex w-36 h-10">
                <div className="w-full h-full flex items-center justify-center border-2 hover:border-tb-green">
                  <span>Cashapp</span>
                </div>
                <span className="h-4 w-4 border-2 bg-tb-green rounded-full flex items-center justify-center relative bottom-2"><CheckIcon className="text-white w-4 h-4" /></span>
            </div>
            <div className="flex w-36 h-10">
                <div className="w-full h-full flex items-center justify-center border-2 hover:border-tb-green">
                  <span>Zelle</span>
                </div>
                <span className="h-4 w-4 border-2 bg-tb-green rounded-full flex items-center justify-center relative bottom-2"><CheckIcon className="text-white w-4 h-4" /></span>
            </div>
            <div className="flex w-36 h-10">
                <div className="w-full h-full flex items-center justify-center border-2 hover:border-tb-green">
                  <span>Credit Card</span>
                </div>
                <span className="h-4 w-4 border-2 bg-tb-green rounded-full flex items-center justify-center relative bottom-2"><CheckIcon className="text-white w-4 h-4" /></span>
            </div>
            </div>
            <div className="py-4">
              <p className="font-bold text-tb-grey2">Cashapp</p>
              <p>You can make payments to the account info below</p>
              <div className="text-tb-grey2 font-bold">9196413832 -$Jesustabernacle2</div>
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
