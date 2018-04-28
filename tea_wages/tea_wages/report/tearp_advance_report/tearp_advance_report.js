// Copyright (c) 2016, Frappe and contributors
// For license information, please see license.txt
/* eslint-disable */
// Input Field for generating report table
frappe.query_reports["Tearp Advance Report"] = {
	"filters": [
					{
						"fieldname":"garden",
            "label": __("Garden"),
            "fieldtype": "Link",
            "options": "Tearp Estate",
            "default": "",
            "reqd":0
					}
	]
}
