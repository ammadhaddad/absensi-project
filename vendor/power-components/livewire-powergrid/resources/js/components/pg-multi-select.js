export default (params) => ({
    tableName: params.tableName ?? null,
    columnField: params.columnField ?? null,
    value: params.value ?? null,
    text: params.text ?? null,
    dataField: params.dataField ?? null,
    options: [],
    data: params.data,
    selected: [],
    show: false,
    init() {
        const self = this
        const options = this.data

        window.addEventListener('pg:clear_multi_select::' + this.tableName, () => {
            self.options.map(function (option) {
                option.selected = false
            })
            self.selected = []
        });

        options.forEach((option) => {

            const value = option.value[self.value];
            const text = option.value[self.text];

            this.options.push({
                value: value,
                text: text,
                selected: false
            });

        });

        JSON.parse(params.selected).forEach(function (value) {
            self.options.map(function (option) {
                if (option.value === value) {
                    option.selected = true
                    self.selected.push(option);
                }
            })
        })
    },
    selectedValues() {
        let selected = []
        this.selected.forEach(function (item) {
             selected.push(item.value)
        })
        return selected
    },
    select(value) {
        const self = this
        const options = this.options.filter(function (option) {
            if (option.value === value && !option.selected) {
                option.selected = true;
                return option
            }
        })

        this.selected.push(options[0]);
        this.show = false

        this.$wire.emit('pg:multiSelect-' + self.tableName, {
            id: this.dataField,
            values: this.selectedValues()
        });
    },
    remove(value) {
        this.selected = this.selected.filter(function(item){
            return item.value !== value;
        });

        this.options = this.options.map(function (option) {
            if (option.value === value) {
                option.selected = false
            }
            return option
        })

        this.$wire.emit('pg:multiSelect-' + this.tableName, {
            id: this.dataField,
            values: this.selectedValues()
        });
    },
})
