import { LabSheet } from "./lab-sheet";
import { deepScheme } from "./heat-map-colours";
export class LabCountSheet extends LabSheet {
    title = "Tutors Time";
    subtitle = "Number of minutes a lab is active";
    populateCols(los) {
        los.forEach((lab) => {
            this.columnDefs.push({
                headerName: lab.title,
                width: 48,
                field: lab.title,
                suppressSizeToFit: true,
                cellClassRules: deepScheme,
                menuTabs: []
            });
        });
    }
    populateRow(user, los) {
        let row = this.creatRow(user);
        this.zeroEntries(los, row);
        let summaryCount = 0;
        user.labActivity.forEach((labMetric) => {
            let labSummaryCount = 0;
            if (labMetric) {
                labMetric.metrics.forEach((stepMetric) => {
                    if (stepMetric.count)
                        labSummaryCount = labSummaryCount + stepMetric.count;
                });
                labSummaryCount = Math.round(labSummaryCount / 2);
                row[`${labMetric.title}`] = labSummaryCount;
            }
            summaryCount = summaryCount + labSummaryCount;
        });
        row.summary = summaryCount;
        this.rowData.push(row);
    }
}
//# sourceMappingURL=lab-count-sheet.js.map