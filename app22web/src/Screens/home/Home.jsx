import React from "react";
import Detail from "../detail/Detail";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full  mt-5 ml-5">
      {/* ----------- */}

      <form className="flex flex-col gap-4 w-96 border boreder-black">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required={true} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>

      {/* ----------- */}
    </div>
  );
}
