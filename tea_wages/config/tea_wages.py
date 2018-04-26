from __future__ import unicode_literals
from frappe import _

def get_data():
    return[
        {
            "label": _("Tearp Wages Section"),
            "color": "#9d19df",
            "icon": "icon-cog",
            "items": [
                        {
                            "type": "doctype",
                            "name": "Tearp Estate",
                            "description": _("Information for Tea Gardens.")
                        },

                        {
                            "type": "doctype",
                            "name": "Tearp Wage Structure",
                            "description": _("Information for Wage Structure.")
                        },

			            {
                            "type": "doctype",
                            "name": "Tearp Labor Family",
                            "description": _("Information for Labor Family Information.")
                        },

                        {
                            "type": "doctype",
                            "name": "Tearp Labors Information",
                            "description": _("Information for Labors.")
                        },

                        {
                            "type": "doctype",
                            "name": "Tearp kamjari List",
                            "description": _("Information for Kamjari Codes.")
                        },

                        {
                            "type": "doctype",
                            "name": "Tearp Wages Setup",
                            "description": _("Information for Wage Span.")
                        },

                        {
                            "type": "doctype",
                            "name": "Tearp Wages Entry",
                            "description": _("Information for Wages Entry and Attendance.")
                        },
                        {
                            "type": "doctype",
                            "name": "Tearp Wages Reconciliation",
                            "description": _("Information for Wages Reconciliation.")
                        },

                        ]
        }
    ]
