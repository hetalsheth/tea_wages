from __future__ import unicode_literals
from frappe import _

def get_data():
    return[
        {
            "label": _("Tearp Wages Section"),
            "icon": "icon-cog",
            "items": [
                        {
                            "type": "doctype",
                            "name": "Tea Estate",
                            "description": _("Information for Tea Gardens.")
                        },

                        {
                            "type": "doctype",
                            "name": "Tea Wage Structure",
                            "description": _("Information for Wage Structure.")
                        },

                        {
                            "type": "doctype",
                            "name": "Tea Labors Information",
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
                            "description": _("Information for Kamjari Codes.")
                        },

                        ]
        }
    ]
