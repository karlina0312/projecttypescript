import React from "react";
import { AdvanceTablesWidget1, ListsWidget1} from '../../../_metronic/_partials/widgets';
// import { toAbsoluteUrl } from "../../../_metronic/_helpers";

export function ProfileOverview() {
  return (
    <div className="row">
      <div className="col-lg-6">
        <ListsWidget1 className="card-stretch gutter-b"></ListsWidget1>
      </div>
      <div className="col-lg-12">
        <AdvanceTablesWidget1 className="card-stretch gutter-b"></AdvanceTablesWidget1>
      </div>
    </div>
  );
}
