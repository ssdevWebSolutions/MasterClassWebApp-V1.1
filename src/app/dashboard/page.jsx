"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../Components/ui/button";
import { Card,CardContent } from "../Components/ui/card";
import { Calendar } from "../components/ui/calendar";
import { Input } from "../components/ui/input";
import { ResponsiveLine } from "@nivo/line";

export default function DashboardPage() {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [search, setSearch] = useState("");

  const handleBookingClick = () => router.push("/dashboard/bookings");
  const handleReportClick = () => router.push("/dashboard/reports");
  const handleMediaClick = () => router.push("/dashboard/media");

  return (
    <div className="p-4 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <Card className="hover:shadow-xl transition-all cursor-pointer" onClick={handleBookingClick}>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold">📅 Book a Session</h2>
          <p className="text-muted-foreground mt-2">Plan and manage all your upcoming sessions.</p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-xl transition-all cursor-pointer" onClick={handleReportClick}>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold">📄 Session Reports</h2>
          <p className="text-muted-foreground mt-2">View personalized performance feedback and coach comments.</p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-xl transition-all cursor-pointer" onClick={handleMediaClick}>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold">🎥 Training Media</h2>
          <p className="text-muted-foreground mt-2">Access your training videos and photos in one place.</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold">📈 Performance Overview</h2>
          <div className="h-48">
            <ResponsiveLine
              data={[
                {
                  id: "Batting Avg",
                  data: [
                    { x: "Jan", y: 32 },
                    { x: "Feb", y: 40 },
                    { x: "Mar", y: 45 },
                    { x: "Apr", y: 50 },
                  ],
                },
              ]}
              margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
              xScale={{ type: "point" }}
              yScale={{ type: "linear", min: 0, max: 100, stacked: false }}
              axisBottom={{ legend: "Month", legendPosition: "middle", legendOffset: 32 }}
              axisLeft={{ legend: "Score", legendPosition: "middle", legendOffset: -30 }}
              colors={{ scheme: "nivo" }}
              lineWidth={3}
              pointSize={8}
              enableGridX={false}
              enableGridY={true}
              animate={true}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold">📆 Upcoming Session</h2>
          <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border mt-4" />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold">🔍 Quick Search</h2>
          <Input
            placeholder="Search coaches, sessions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mt-4"
          />
        </CardContent>
      </Card>
    </div>
  );
}
