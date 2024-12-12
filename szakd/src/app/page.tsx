"use client"

import { Day, Inject, Month, ScheduleComponent, ViewDirective, ViewsDirective, Week } from "@syncfusion/ej2-react-schedule";
import {registerLicense} from "@syncfusion/ej2-base"
registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWH5cd3RcRWNeUUdwXko=');

const data = [
  {
    Id: 61,
    Subject: 'Decoding',
    StartTime: new Date(2018, 3, 4, 9, 30),
    EndTime: new Date(2018, 3, 4, 10, 30),
    IsAllDay: false
  },
];

export default function Home() {
  return (
   <main className="flex justify-center items-center">
    <ScheduleComponent width={800} height={600} 
    eventSettings={{
      dataSource: data,
    }}>
      <ViewsDirective>
        <ViewDirective option="Day"/>
        <ViewDirective option="Week"/>
        <ViewDirective option="Month"/>
      </ViewsDirective>

      <Inject services={[Day, Week, Month]}/>
    </ScheduleComponent>
   </main>
  );
}
