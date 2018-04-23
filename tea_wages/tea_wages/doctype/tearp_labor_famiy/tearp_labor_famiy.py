# -*- coding: utf-8 -*-
# Copyright (c) 2018, Frappe and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class TearpLaborFamiy(Document):
	def validate(self):
		self.age_validate()
		self.dependent_type()




	def age_validate(self,dob):
		dob1=self.dob
		today = date.today()
		self.age = today.year - dob1.year - ((today.month, today.day) < (dob1.month, born.day))
		return self.age

	def dependent_type(self):
		self.age=age_validate(dob)
		self.dep_type=None
		if self.age<18:
			self.dep_type="Minor"
		else:
			self.dep_type="Adult"
		return self.dep_type
