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
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> ad0daf0c54444f2588994e6a74212a01287b49ae
=======
>>>>>>> wage_aditya
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
<<<<<<< HEAD
                        },
                    ]
            },
        {
            "label": _("Tearp Entry Section"),
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
=======
>>>>>>> wage_aditya
                        },
                    ]
            },
        {
            "label": _("Tearp Entry Section"),
            "icon": "icon-cog",
            "items": [
                        {
                        "type": "doctype",
<<<<<<< HEAD
                        "name": "Tearp Advance Entry",
                        "description": _("Information for Advance Entry.")
                        },
<<<<<<< HEAD
                        {
                        "type": "doctype",
                        "name": "Tearp LIC Entry",
                        "description": _("Information for LIC Entry.")
                        },
                      ]
        }


=======
<<<<<<< HEAD
                        {
                            "type": "doctype",
                            "name": "Tearp Wages Reconciliation",
                            "description": _("Information for Wages Reconciliation.")
=======
                        "name": "Tearp Wages Entry",
                        "description": _("Information for Wages Entry and Attendance.")
>>>>>>> wage_aditya
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

<<<<<<< HEAD
=======
>>>>>>> wages_hetal
                        ]
        },
=======
                        {
                        "type": "doctype",
                        "name": "Tearp LIC Entry",
                        "description": _("Information for LIC Entry.")
                        },
                      ]
          },
>>>>>>> wage_aditya
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

<<<<<<< HEAD
>>>>>>> 2aa2510e89dd239148ddea3e77722b9c2263f583
=======

>>>>>>> wage_aditya
    ]
