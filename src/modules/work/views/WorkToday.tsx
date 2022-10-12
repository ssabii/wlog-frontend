import { Badge, ButtonV2 } from "@meshkorea/vroong-design-system-web";
import React from "react";

import Card from "components/Card";

const WorkToday = () => (
  <Card>
    <div>오늘 근무</div>
    <div>2022.10.02 (화)</div>
    <div>
      출근전 <Badge>00h 00m</Badge>
    </div>
    <ButtonV2 status="primary">지금 출근</ButtonV2>
  </Card>
);

export default WorkToday;
