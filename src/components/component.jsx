
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

export function Component() {
  return (
    (<div className=" top-4 right-4 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="relative" size="icon" variant="ghost">
            <BellIcon className="h-6 w-6" />
            <span
              className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              0
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[350px] p-0">
          <Card className="border-0 shadow-lg">
            <CardHeader className="border-b">
              <CardTitle>Notifications</CardTitle>
              <CardDescription>You have 0 unread messages.</CardDescription>
            </CardHeader>
            <CardContent className="py-4">
              <div className="space-y-4">
                <div className="grid grid-cols-[25px_1fr] items-start gap-4">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-blue-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Searching for Peoples Nearby</p>
                    {/*<p className="text-sm text-gray-500 dark:text-gray-400">5 min ago</p>*/}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </PopoverContent>
      </Popover>
    </div>)
  );
}

function BellIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>)
  );
}
