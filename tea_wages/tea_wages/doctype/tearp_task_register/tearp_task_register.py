# -*- coding: utf-8 -*-
# Copyright (c) 2018, Frappe and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import getdate,
from datetime import datetime

class TearpTaskRegister(Document):
	pass
	'''def validate(self):
		self.validate_date

	def validate_date(self):
		period = None;
		c_year = int(datetime.now().year)
		start_date = datetime(c_year, 4, 15)
		end_date = datetime(c_year, 10, 15)
		print(start_date)
		print(end_date)
		if getdate(self.task_date) >= start_date and getdate(self.task_date) <= end_date:
			get_data(self.peak_check)
		else:
			get_data(self.non_peak_check)'''
