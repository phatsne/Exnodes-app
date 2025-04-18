"use client"

import { CreditCard, Gear, Sparkle } from "@phosphor-icons/react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"

const BankInformation = () => {
  return (
    <div className="min-h-screen flex flex-col px-6 ">
      <div className="flex">
        <div className=" flex flex-wrap gap-6">
          <Card className="w-[400px] h-[200px] border bg-transparent">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center space-x-2">
                <CreditCard className="w-5 h-5" />
                <CardTitle>Bank Info</CardTitle>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 text-xs rounded-md flex items-center space-x-1">
                  <Sparkle className="w-3 h-3" />
                  <span>Default</span>
                </span>
                <Gear className="w-5 h-5 cursor-pointer" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label>Bank Account Number</Label>
                  </div>
                  <div>
                    <Label>Bank Name</Label>
                  </div>
                  <div>
                    <Label>Bank Account</Label>
                  </div>
                  <div>
                    <Label>Branch</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-[400px] h-[200px] border bg-transparent">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center space-x-2">
                <CreditCard className="w-5 h-5" />
                <CardTitle>Bank Info</CardTitle>
              </div>
              <div className="flex items-center space-x-2">
                <Gear className="w-5 h-5 cursor-pointer" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label>Bank Account Number</Label>
                  </div>
                  <div>
                    <Label>Bank Name</Label>
                  </div>
                  <div>
                    <Label>Bank Account</Label>
                  </div>
                  <div>
                    <Label>Branch</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default BankInformation
