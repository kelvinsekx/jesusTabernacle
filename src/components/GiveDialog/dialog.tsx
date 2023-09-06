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

export function GiveDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <header className="text-white h-full bg-tb-green flex items-center">GIVE</header>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-black text-4.5xl pb-2 ">Make a Donation</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div>
            <div>What would you like to give for?</div>
            <div>
                <div>Offering</div>
            </div>
          </div>
          <div></div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
