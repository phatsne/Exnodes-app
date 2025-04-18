import { Eye, Download, Trash, CreditCard, Upload } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const WorkContract = () => {
  return (
    <div className="px-6 space-y-4">
      {/* Contract Template */}
      <Card className="w-[700px] bg-transparent">
        <CardHeader className="flex flex-row items-center justify-between p-4">
          <CardTitle className="flex items-center space-x-2">
            <CreditCard />
            <span className="text-lg">Contract Template</span>
          </CardTitle>
          <CardContent className="flex space-x-2">
            <Button variant="secondary" className="">
              <Eye className="w-4 h-4 mr-2" />
              View
            </Button>
            <Button variant="secondary" className="">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button variant="destructive">
              <Trash className="w-4 h-4 mr-2" />
              Remove
            </Button>
          </CardContent>
        </CardHeader>
      </Card>

      <Card className="w-[700px] bg-transparent">
        <CardHeader className="flex flex-row items-center justify-between p-4">
          <CardTitle className="flex items-center space-x-2">
            <CreditCard />
            <span className="text-lg">Signed Contract</span>
          </CardTitle>
          <CardContent className="flex space-x-2 text-sm">
            <Button variant="secondary" className="">
              <Eye className="w-4 h-4 mr-2" />
              View
            </Button>
            <Button variant="secondary" className="">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button variant="destructive">
              <Trash className="w-4 h-4 mr-2" />
              Remove
            </Button>
          </CardContent>
        </CardHeader>
      </Card>
      <CardContent className="p-0 pl-1 ">
        Upload New Contract
        <Card className="w-[700px] bg-transparent">
          <div className="w-[700px] space-y-2 p-4">
            <p className="text-lg">Choose File Upload contract</p>
          </div>
        </Card>
        <div className="flex items-center space-x-2 pt-2">
          <Button className="bg-green-600 px-6">
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
        </div>
      </CardContent>
    </div>
  )
}

export default WorkContract
