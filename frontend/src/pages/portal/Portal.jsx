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
          {/* Responsive container */}
          <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 md:mx-[200px]">
            {/* Tabs list responsive */}
            <TabsList className="flex justify-between  sm:justify-center w-full h-[76px] bg-white mb-[0.5px] shadow-none ring-0 border-0 rounded-none">
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-[#014273] data-[state=active]:text-white text-sm sm:text-base">Dashboard</TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-[#014273] data-[state=active]:text-white text-sm sm:text-base">Settings</TabsTrigger>
              <TabsTrigger value="message" className="data-[state=active]:bg-[#014273] data-[state=active]:text-white text-sm sm:text-base">Messages</TabsTrigger>
              <TabsTrigger value="invoices" className="data-[state=active]:bg-[#014273] data-[state=active]:text-white text-sm sm:text-base">Invoices</TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* Tabs content below the blue background */}
        <div className="mt-4 w-full px-4 sm:px-6 md:px-12 lg:px-24">
          <TabsContent value="dashboard"><Dashboard /></TabsContent>
          <TabsContent value="settings"><Settings /></TabsContent>
          <TabsContent value="message">Make changes Message.</TabsContent>
          <TabsContent value="invoices"><Invoices /></TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

export default Portal
