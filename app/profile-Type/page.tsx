"use client";

import { Card, CardContent } from "@/components/ui/card";
import { UserCircle, Building2, PiggyBank, Cog } from "lucide-react";

export default function ProfileTypePage() {
  const accountTypes = [
    { type: "Player", icon: UserCircle },
    { type: "Organization", icon: Building2 },
    { type: "Investor", icon: PiggyBank },
    { type: "Service Provider", icon: Cog },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Choose Your Account Type
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accountTypes.map((account) => (
            <Card
              key={account.type}
              className="bg-gray-900 border-gray-800 hover:border-[#D70D0D] transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="p-6 flex items-center space-x-4">
                <account.icon
                  className="w-12 h-12 text-gray-400 group-hover:text-[#D70D0D] transition-colors duration-300"
                  strokeWidth={1.5}
                />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-300 group-hover:text-[#D70D0D] transition-colors duration-300">
                    {account.type}
                  </h2>
                  <p className="text-gray-400">Select to continue</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-12 w-full max-w-4xl">
        <div className="h-1 w-full bg-gradient-to-r from-black via-[#D70D0D] to-black rounded-full" />
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>Choose the account type that best fits your needs</p>
        <p>You can always change this later in your account settings</p>
      </div>
    </div>
  );
}
