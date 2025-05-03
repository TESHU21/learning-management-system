import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Dashboard from './dashboard/Dashboard'
import Settings from './settings/Settings'
import Invoices from './invoices/Invoices'

const Portal = () => {
  return (
    <div>
      <Tabs defaultValue="dashboard" className="py-0">
        {/* Blue full-width header */}
        <div className="w-full bg-blue-primary h-[135px] relative flex items-end z-10">
          {/* Tabs list centered and narrow */}
          <TabsList className="flex justify-center w-full h-[76px] mx-[200px] bg-white mb-[0.5px] shadow-none ring-0 border-0 ">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-[#014273] data-[state=active]:text-white ">Dashbboard</TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-[#014273] data-[state=active]:text-white">Settings</TabsTrigger>
            <TabsTrigger value="message" className="data-[state=active]:bg-[#014273] data-[state=active]:text-white">Messages</TabsTrigger>
            <TabsTrigger value="invoices" className="data-[state=active]:bg-[#014273] data-[state=active]:text-white">Invoices</TabsTrigger>
          </TabsList>
        </div>

        {/* Tabs content below the blue background */}
        <div className="mt-4 w-full">
          <TabsContent value="dashboard"><Dashboard/></TabsContent>
          <TabsContent value="settings"><Settings/></TabsContent>
          <TabsContent value="message">Make changes Message.</TabsContent>
          <TabsContent value="invoices"><Invoices/></TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

export default Portal
