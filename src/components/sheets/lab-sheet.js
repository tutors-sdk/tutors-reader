export let options = {
    animateRows: true,
    headerHeight: 180,
    defaultColDef: {
        sortable: true,
        resizable: true
    },
    enableRangeSelection: true,
    enableCellChangeFlash: true,
    getRowNodeId: function (data) {
        return data.github;
    }
};
export class LabSheet {
    title = "";
    subtitle = "";
    columnDefs = [
        { headerName: "User", field: "user", width: 180, suppressSizeToFit: true, pinned: "left" },
        { headerName: "Github", field: "github", width: 80, suppressSizeToFit: true, cellRenderer: this.renderGithub },
        { headerName: "Total", field: "summary", width: 60, suppressSizeToFit: true },
        { headerName: "Date Last Accessed", field: "date", width: 90, suppressSizeToFit: true }
    ];
    sortModel = [{ colId: "summary", sort: "dsc" }];
    rowData = [];
    renderGithub(params) {
        if (params.value) {
            var nameElement = document.createElement("span");
            var a = document.createElement("a");
            var linkText = document.createTextNode(params.value);
            a.appendChild(linkText);
            a.title = params.value;
            a.href = "http://github.com/" + a.title;
            a.setAttribute("target", "_blank");
            nameElement.appendChild(a);
            return nameElement;
        }
    }
    formatName(userName, email) {
        let name = userName;
        const fullName = name;
        if (name === email) {
            name = "~~ " + email;
        }
        else {
            var firstName = fullName.split(" ").slice(0, -1).join(" ");
            var lastName = fullName.split(" ").slice(-1).join(" ");
            name = lastName + ", " + firstName;
        }
        return name;
    }
    creatRow(user) {
        let row = {
            user: user.name,
            summary: 0,
            date: user.last,
            github: user.nickname
        };
        return row;
    }
    render(grid) {
        if (grid) {
            const api = grid.gridOptions.api;
            api.setColumnDefs(this.columnDefs);
            api.setRowData(this.rowData);
        }
    }
    clear(grid) {
        if (grid) {
            grid.gridOptions.api.setRowData([]);
            this.rowData = [];
            this.columnDefs.length = 4;
        }
    }
    zeroEntries(los, row) {
        los.forEach((lab) => {
            row[`${lab.title}`] = 0;
        });
    }
    zeroEntriesComplete(los, row) {
        los.forEach((lab) => {
            lab.los.forEach((step) => {
                row[`${lab.title + step.shortTitle}`] = 0;
            });
        });
    }
    populateCols(los) {
    }
    populateRow(user, los) {
    }
    updateRow(user, rowNode) {
    }
}
//# sourceMappingURL=lab-sheet.js.map