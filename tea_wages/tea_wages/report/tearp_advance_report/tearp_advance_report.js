// Copyright (c) 2016, Frappe and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Tearp Advance Report"] = {
	"filters": [
		/*			{
						"fieldname":"date",
            "label": __("DATE"),
            "fieldtype": "Date",
            "options": "",
            "default": frappe.datetime.get_today(),
            "reqd":0
					}, */
					{
						"fieldname":"garden",
            "label": __("Garden"),
            "fieldtype": "Link",
            "options": "Tearp Estate",
            "default": "",
            "reqd":0
					}
		/*			{
						"fieldname":"worker_id",
            "label": __("Worker ID"),
            "fieldtype": "Link",
            "options": "Tearp Labors Information",
            "default": "",
            "reqd":0
					}  */
	]
}
