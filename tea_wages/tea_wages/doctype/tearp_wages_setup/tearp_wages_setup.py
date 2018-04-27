# -*- coding: utf-8 -*-
# Copyright (c) 2018, Frappe and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import getdate


class TearpWagesSetup(Document):
	def validate(self):
		self.valid_wage_date()
# Calculation for days between start and end dates for different wage frequency
	def valid_wage_date(self):
		start_date = getdate(self.from_date)
		end_date = getdate(self.to_date)
		diff = (end_date - start_date).days
		if self.wage_frequency == 'Weekly':
			if diff < 6 or diff > 6:
					frappe.throw("Please enter a date equal to 7 days!!!")
		elif self.wage_frequency == 'Fortnightly':
			if diff < 13 or diff > 13:
				frappe.throw("Please enter a date equal to 14 days!!!")
		else:
			frappe.throw("Please enter a valid date!!!")
