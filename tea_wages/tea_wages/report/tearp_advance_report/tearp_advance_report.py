# Copyright (c) 2013, Frappe and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _
from frappe.model.document import Document
from frappe import utils

def execute(filters=None):
	data = []
	columns = get_columns()
	worker = get_worker_id(filters)
	for i in worker:
		data.append([i.worker_id,i.worker_name,i.deduction,i.adv_amount,i.adv_status])
	'''	garden = get_garden(filters, i.worker_id)
		deduction = get_deduction(filters, i.worker_id)
		adv_amount = get_adv_amount(filters, i.worker_id)
		data.append([garden, i.worker_id, deduction, adv_amount, filters.md])'''

	return columns, data

def get_worker_id(filters):
	return frappe.db.sql("""select distinct adv_status,worker_id,worker_name,deduction,adv_amount from `tabTearp Advance Entry` where garden = %s """,(filters.garden),as_dict=1)

'''def get_garden(filter, worker_id):
	return frappe.db.sql("""select abbv from `tabTearp Estate` where worker_id = %s """, (worker_id))

def get_deduction(filter, worker_id):
	return frappe.db.sql("""select deduction from `tabTearp Advance Entry` where worker_id = %s """, (worker_id))

def get_adv_amount(filter, worker_id):
	return frappe.db.sql("""select adv_amount from `tabTearp Advance Entry` where worker_id = %s """, (worker_id))
'''
def get_columns():
	columns = [{
		"fieldname": "worker_id",
		"label": _("Worker ID"),
		"fieldtype": "Data",
		"option":"",
		"width":90
	}]

	columns.append({
		"fieldname": "worker_name",
		"label": _("Worker Name"),
		"fieldtype": "Data",
		"option":"",
		"width":90
	})

	columns.append({
		"fieldname": "deduction",
		"label": _("Deduction"),
		"fieldtype": "Float",
		"option":"",
		"width":90
	})

	columns.append({
		"fieldname": "adv_amount",
		"label": _("Advance Amount"),
		"fieldtype": "Float",
		"option":"",
		"width":90
	})

	columns.append({
		"fieldname": "adv_status",
		"label": _("Advance Status"),
		"fieldtype": "Float",
		"option":"",
		"width":90
	})

	return columns
