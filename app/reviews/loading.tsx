'use client'

import { Card, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"


function loading() {
  return (
    <section className="grid md:grid-cols-2 gap-8 mt-4">
      <ReiewLoadingCard />
      <ReiewLoadingCard />
    </section>
  );
}

const ReiewLoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <Skeleton className="w-12 h-12 rounded-full" />
          <div>
            <Skeleton className="w-[150px] h-4 mb-2" />
            <Skeleton className="w-[150px] h-4" />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
export default loading
