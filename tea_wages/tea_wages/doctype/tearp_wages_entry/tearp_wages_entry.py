# -*- coding: utf-8 -*-
# Copyright (c) 2018, Frappe and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import getdate
import datetime

class TearpWagesEntry(Document):
	def validate(self):
		self.record_date_validate()

	def record_date_validate(self):
		today_date = datetime.date.today()
		r_date = getdate(self.record_date)
		if r_date > today_date:
			frappe.throw('Please Enter a Date not more than Today')
