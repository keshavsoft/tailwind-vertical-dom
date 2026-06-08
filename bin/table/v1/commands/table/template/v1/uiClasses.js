const KeshavUIClasses = {
    form: {
        formClass: 'grid grid-cols-1 gap-x-8 gap-y-4 p-6 verticalForm',
        buttonClass: 'mt-2 px-4 py-1 bg-green-500 text-white',
        rowClass: 'flex items-center space-x-4',
        labelClass: 'w-24 text-sm font-medium',
        inputClass: 'flex-1 border rounded px-3 py-2'
    },
    table: {
        tdClass: "px-4 py-2 border",
        serialClass: "px-4 py-2 border"
    },
    tableComplete: {
        thead: {
            trClass: "bg-gray-200 border-b border-gray-500",
            thClass: "px-6 py-3 border border-gray-400",
            thSerialClass: "px-4 py-2 border border-gray-300"
        },
        tbody: {
            trClass: "border-b border-gray-100 hover:bg-gray-50 transition-colors",
            tdClass: "px-4 py-2 text-sm text-gray-800"
        },
        tfoot: {
            trClass: "bg-gray-50 border-t border-gray-200",
            tdClass: "px-4 py-2 border",
            serialClass: "px-4 py-2 border"
        }
    }
};

export { KeshavUIClasses };