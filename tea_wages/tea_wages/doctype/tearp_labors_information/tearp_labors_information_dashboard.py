from frappe import _

def get_data():
	return {
			'heatmap': True,
			'heatmap_message': _('This is the links for different Labor Information.'),
			'fieldname': 'worker_id',
			'transactions': [
				{
					'label': _('Tearp Wages Structure'),
                    'color': '#FF0000',
					'items': ['Tearp Wages Reconciliation','Tearp Labor Family']
				}
			]
		}
