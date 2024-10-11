import * as React from "react";
import { IoFilterOutline } from "react-icons/io5";
import FilterDrawer, {
  IFormField,
} from "../../../../shared/components/FilterDrawer";
import TableStructure from "../../../../shared/components/TableStructure";
import BasePnpService from "../../../../shared/services/basePnp.service";
import classes from "../../stylesheets/casesListing.module.scss";

interface FilterValues {
  [key: string]: string | [string, string] | undefined;
}

const formFields: IFormField[] = [
  { name: "CaseName", label: "Case Name", type: "input" },
  { name: "CaseNumber", label: "Case Number", type: "input" },
  { name: "PropertyLocation", label: "Property Location", type: "input" },
  { name: "CaseType", label: "Case Type", type: "input" },
  { name: "DateFiled", label: "Date Filed", type: "rangePicker" },
  { name: "Court", label: "Court", type: "input" },
  {
    name: "CurrentStatus",
    label: "Current Status",
    type: "select",
    options: ["In Progress", "Closed", "Not Started", "Cancelled"],
  },
];

export default function CaseManagementLanding() {
  const [dbCases, setDbCases] = React.useState([]);
  const [, /*cases*/ setCases] = React.useState([]);
  const [filterValues, setFilterValues] = React.useState<FilterValues>({});
  const pnpService = BasePnpService.getPersistentInstance();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const response = await pnpService.getAll("Cases", ["*"]);
      if (response.data) {
        console.log(response?.data, "pnp");
        setDbCases(response?.data);
        setCases(response?.data);
      }
    })();
  }, []);

  React.useEffect(() => {
    console.log(filterValues, "filter values");
    if (Object.keys(filterValues).length === 0) {
      setCases(dbCases);
    }
    const filtered = dbCases?.filter((caseItem: Record<string, any>) => {
      return Object.keys(filterValues).every((key) => {
        if (key === "DateFiled" && filterValues[key]) {
          const [startDate, endDate] = filterValues[key] as [string, string];
          const dateToCheck = new Date(caseItem[key]);
          return (
            dateToCheck >= new Date(startDate) &&
            dateToCheck <= new Date(endDate)
          );
        }

        const filterValue = filterValues[key];

        if (!filterValue) {
          return true;
        }

        if (
          [
            "CaseName",
            "CaseNumber",
            "PropertyLocation",
            "CaseType",
            "CurrentStatus",
            "Court",
          ].includes(key) &&
          typeof filterValue === "string"
        ) {
          return caseItem[key]
            ?.toString()
            .toLowerCase()
            .includes(filterValue?.toLowerCase());
        }

        return true;
      });
    });

    console.log(filtered, "filtered cases");
    setCases(filtered);
  }, [filterValues]);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.actionsContainer}>
          <div
            className={classes.filterBtn}
            onClick={() => setOpen((prev) => !prev)}
          >
            <IoFilterOutline />
            <span>Filter</span>
          </div>
        </div>
        <TableStructure />
      </div>
      <FilterDrawer
        open={open}
        setOpen={setOpen}
        filterValues={filterValues}
        setFilterValues={setFilterValues}
        formFields={formFields}
      />
    </>
  );
}
