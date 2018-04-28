# Copyright (c) 2013, Frappe and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _
from frappe.model.document import Document
from frappe import utils

#Fetching the required data for the report table
def execute(filters=None):
	data = []
	columns = get_columns()
	worker = get_worker_id(filters)
	for i in worker:
		data.append([i.worker_id,i.worker_name,i.lic])

	return columns, data
#Function fetching the data from Tearp Advance Entry Doctype
def get_worker_id(filters):
	return frappe.db.sql("""select distinct worker_id,worker_name,lic from `tabTearp LIC Entry` where garden = %s """,(filters.garden),as_dict=1)

# Appending the data for required data for report table
def get_columns():
	columns = [{
		"fieldname": "worker_id",
		"label": _("Worker ID"),
		"fieldtype": "Data",
		"option":"",
		"width":90
	}]

	columns.append ({
		"fieldname": "worker_name",
		"label": _("Worker Name"),
		"fieldtype": "Data",
		"option":"",
		"width":90
	})

	columns.append({
		"fieldname": "lic",
		"label": _("LIC"),
		"fieldtype": "Float",
		"option":"",
		"width":90
	})

	return columns
