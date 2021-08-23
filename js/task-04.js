const counterBtns = document.querySelectorAll('#counter button');

counterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const DATASET = {
            INCREMENT: 'increment',
            DECREMENT: 'decrement',
        };

        const action = this.dataset.action;

        const value = document.getElementById('value');
        const currentValue = +value.textContent;

        let newValue = 0;

        switch (action) {
            case DATASET.INCREMENT:
                newValue = currentValue + 1;
                break;

            case DATASET.DECREMENT:
                newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
                break;
        }
        value.textContent = newValue;
    });
});
