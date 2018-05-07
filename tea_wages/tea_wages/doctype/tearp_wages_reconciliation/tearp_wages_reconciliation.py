# -*- coding: utf-8 -*-
# Copyright (c) 2018, Frappe and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class TearpWagesReconciliation(Document):

	def on_submit(self):
		wages_cal_doc = frappe.get_doc("Tearp Wages Reconciliation", self.name)
		for d in wages_cal_doc.attendance:
			doc = frappe.new_doc("Tearp Wages Calculator")
			doc.garden = d.garden
			doc.book_code = d.book_code
			doc.record_date = d.record_date
			doc.doc_type = d.doctype
			doc.document = d.name
			doc.worker_id = d.worker_id
			doc.task_done = d.task
			doc.wage_rate = d.wage_rate
			doc.entry_type = d.entry_type
			doc.insert()
