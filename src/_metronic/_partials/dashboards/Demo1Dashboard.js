import React from "react";
import {
  MixedWidget1,
  StatsWidget10,
  ListsWidget1,
  AdvanceTablesWidget1,
} from "../widgets";
export function Demo1Dashboard() {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-xxl-4">
          <MixedWidget1 className="card-stretch gutter-b" />
        </div>
        <div className="col-lg-6 col-xxl-4">
          <StatsWidget10
            className="card-stretch card-stretch-half gutter-b"
            symbolShape="circle"
            baseColor="success"
          />
        </div>

        <div className="col-lg-6 col-xxl-4 order-1 order-xxl-1">
          <ListsWidget1 className="card-stretch gutter-b" />
        </div>
        <div className="col-xxl-8 order-2 order-xxl-1">
          <AdvanceTablesWidget1 className="card-stretch gutter-b" />
        </div>
      </div>
    </>
  );
}
