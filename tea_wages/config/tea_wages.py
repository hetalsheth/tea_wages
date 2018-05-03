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
                        "type": "doctype",
                        "name": "Tearp Maternity Register",
                        "description": _("Information for Maternity Registration.")
                        },
                        {
                        "type": "doctype",
                        "name": "Tearp Sick Leave Register",
                        "description": _("Information for Sick Leave Registration.")
                        },
                        {
                        "type": "doctype",
                        "name": "Tearp Task Register",
                        "description": _("Information for Task.")
                        },
                    ]
            },
        {
            "label": _("Tearp Entry Section"),
            "color": "#9d19df",
            "icon": "icon-cog",
            "items": [
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
                        {
                        "type": "doctype",
                        "name": "Tearp Advance Entry",
                        "description": _("Information for Advance Entry.")
                        },
                        {
                        "type": "doctype",
                        "name": "Tearp LIC Entry",
                        "description": _("Information for LIC Entry.")
                        },
                        {
                        "type": "doctype",
                        "name": "Tearp Incentives Register",
                        "description": _("Information for Incentives.")
                        },
                        {
                        "type": "doctype",
                        "name": "Tearp Disincentives Register",
                        "description": _("Information for Disincentives.")
                        },
                        {
                        "type": "doctype",
                        "name": "Tearp Wages Calculator",
                        "description": _("Information for Wage Calculation.")
                        },
                      ]
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
]
