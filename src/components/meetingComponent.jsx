import React, {useContext, useState} from 'react';
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import {ConnectContext, UsersArrayContext} from "@/main.jsx";
import {ListContext} from "@/main.jsx";

const MeetingCard = ({ name, interests, distance, uid }) => {
    const connectNearby = useContext(ConnectContext)
    const[text,setText] = useState()
    const {listOfInterests} = useContext(ListContext)
    return (
        <div className="rounded-lg hover:shadow-lg transition duration-100 border border-purple-800 bg-white min-w-min p-4 shadow-sm dark:bg-gray-950">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">

                    <div>
                        <p className="text-sm font-medium">{name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Interests: {interests}</p>
                        <p className="text-sm text-white-800 dark:text-white-800">{distance} miles away</p>
                    </div>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="border-purple-800" size="sm" variant="outline">
                            Connect
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] border-purple-800">
                        <DialogHeader>
                            <DialogTitle>Connect with {name}</DialogTitle>
                            <DialogDescription>Send a connection request with an optional
                                message.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <Textarea className="min-h-[100px] focus:border-none focus:outline-none focus:ring-0 border-purple-800 " placeholder="Add an optional message..." onChange={(e)=>setText(e.target.value)}/>
                        </div>
                        <DialogFooter>
                            <Button type="submit" onClick={()=>{
                                navigator.geolocation.getCurrentPosition(
                                    (pos) => {
                                        const latitude = pos.coords.latitude;
                                        const longitude = pos.coords.longitude;
                                        if (latitude === null || longitude === null) {
                                            console.log("Error");
                                            return;
                                        }
                                        console.log(connectNearby);
                                        connectNearby(name,latitude,longitude,text)

                                    },
                                    (e) => console.log(e)
                                );
                            }}>Send Request</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

const MeetingComponent = () => {
    const {UserArr} = useContext(UsersArrayContext);


    return (
        <div>
            <h1 className="text-center font-thin text-7xl mb-20">Peoples Nearby</h1>
            <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {UserArr.map((meeting) => (
                        <MeetingCard
                            key={Date.now()}
                            name={meeting.uid}
                            interests={meeting.interests.map(interest => interest).join(', ')}
                            distance={meeting.distance.toFixed(2)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MeetingComponent;

