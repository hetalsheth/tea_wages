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
<<<<<<< HEAD
                            "type": "doctype",
                            "name": "Tearp Maternity Register",
                            "description": _("Information for Maternity Registration.")
=======
                        "type": "doctype",
                        "name": "Tearp Wages Entry",
                        "description": _("Information for Wages Entry and Attendance.")
                        },
                        {
                        "type": "doctype",
                        "name": "Tearp Wages Reconciliation",
                        "description": _("Information for Wages Reconciliation.")
>>>>>>> 98441e14f0a85b9cf5155ea1d48fe37cada4db44
                        },
                        {
                        "type": "doctype",
<<<<<<< HEAD
                        "name": "Tearp Wages Entry",
                        "description": _("Information for Wages Entry and Attendance.")
                        },
                        {
                        "type": "doctype",
                        "name": "Tearp Wages Reconciliation",
                        "description": _("Information for Wages Reconciliation.")
                        },
                        {
                        "type": "doctype",
=======
>>>>>>> 98441e14f0a85b9cf5155ea1d48fe37cada4db44
                        "name": "Tearp Advance Entry",
                        "description": _("Information for Advance Entry.")
                        },
                        {
                        "type": "doctype",
                        "name": "Tearp LIC Entry",
                        "description": _("Information for LIC Entry.")
                        },
                      ]
<<<<<<< HEAD
            },
        {
            "label": _("Tearp Report Section"),
            "icon": "icon-cog",
            "items": [
                        {
                            "type": "report",
                            "is_query_report": True,
                            "name": "Tearp Advance Report",
                            "description": _("Information for Advance Entry")
                        },
                        {
                            "type": "report",
                            "is_query_report": True,
                            "name": "Tearp LIC Report",
                            "description": _("Information for LIC Entry")
                        }
                     ]
        }
=======
        }

>>>>>>> 98441e14f0a85b9cf5155ea1d48fe37cada4db44
    ]
