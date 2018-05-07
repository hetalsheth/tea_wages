# -*- coding: utf-8 -*-
# Copyright (c) 2018, Frappe and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _
from frappe.model.document import Document

exclude_from_linked_with = True
class TearpWagesCalculator(Document):
	def validate(self):
		self.flags.ignore_submit_comment = True
		self.check()

	def check(self):
		garden_name = frappe.db.get_value("Tearp Estate", self.garden, "garden")
		worker_id = frappe.db.get_value("Tearp Labors Information", self.worker_id, "worker_id")

	
