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

export function GiveDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <header className="text-white px-2 h-full bg-tb-green flex items-center">GIVE</header>
      </DialogTrigger>
      <DialogContent className="w-fit">
        <DialogHeader>
          <DialogTitle className="text-black text-4.5xl pb-2 ">Make a Donation</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 text-tb-ash text-base">
          <div>
            <div className="pb-4">What would you like to give for?</div>
            <div className="flex gap-4">
                <div className="w-36 h-10 flex items-center justify-center bg-tb-ash/30">
                  <span>Offering</span>
                </div>
                <div className="w-36 h-10 flex items-center justify-center bg-tb-ash/30">
                  <span>Tithe</span>
                </div>
                <div className="w-36 h-10 flex items-center justify-center bg-tb-ash/30">
                  <span>Others</span>
                </div>
            </div>
          </div>
          <div>
            <div className="pb-4">Select payment method:</div>
            <div className="flex gap-4">
            <div className="flex w-36 h-10">
                <div className="w-full h-full flex items-center justify-center border-2 hover:border-tb-green">
                  <span>Cashapp</span>
                </div>
                <span className="h-4 w-4 border-2 border-tb-green rounded-full"><CheckIcon className="text-white w-4 h-4" /></span>
            </div>
            <div className="flex w-36 h-10">
                <div className="w-full h-full flex items-center justify-center border-2 hover:border-tb-green">
                  <span>Zelle</span>
                </div>
                <CheckIcon />
            </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
