import {
    FormGroup,
    ValidationErrors,
    ValidatorFn,
    FormControl,
    Validators,
    AbstractControl
} from '@angular/forms';

// Checks that Atlease one of the form inputs is filled
export const atLeastOne = (validator: ValidatorFn) => (
    group: FormGroup,
): ValidationErrors | null => {
    const hasAtLeastOne = group && group.controls && Object.keys(group.controls)
        .some(k => !validator(group.controls[k]));

    return hasAtLeastOne ? null : {
        atLeastOne: true,
    };
};

// Match one value with another // eg paswword doesnot match
export function matchOtherValidator(otherControlName: string) {

    let thisControl: FormControl;
    let otherControl: FormControl;

    return function matchOtherValidate(control: FormControl) {

        if (!control.parent) {
            return null;
        }

        // Initializing the validator.
        if (!thisControl) {
            thisControl = control;
            otherControl = control.parent.get(otherControlName) as FormControl;
            if (!otherControl) {
                throw new Error('matchOtherValidator(): other control is not found in parent group');
            }
            otherControl.valueChanges.subscribe(() => {
                thisControl.updateValueAndValidity();
            });
        }

        if (!otherControl) {
            return null;
        }

        if (otherControl.value !== thisControl.value) {
            return {
                matchOther: true
            };
        }

        return null;

    };

}

// Date Validator
export function dateValidator(c: AbstractControl): { [key: string]: boolean } | null {
    if (c.pristine) {
        return null;
    }
    if ((c.value !== undefined && c.value !== '' && c.value != null)) {

        let month = null;
        let day = null;
        let year = null;
        const currentTaxYear = Number(new Date().getFullYear() - 1);
        if (c.value.indexOf('/') > -1) {
            const res = c.value.split('/');
            if (res.length > 1) {
                month = res[0];
                day = res[1];
                year = res[2];
            }
        } else {
            if (c.value.length === 8) {
                month = c.value.substring(0, 2);
                day = c.value.substring(2, 4);
                year = c.value.substring(4, 8);
            }
        }
        if (isNaN(month) || isNaN(day) || isNaN(year)) {
            return { 'dateInvalid': true };
        }
        month = Number(month);
        day = Number(day);
        year = Number(year);
        if (month < 1 || month > 12) { // check month range
            return { 'dateInvalid': true };
        }
        if (day < 1 || day > 31) {
            return { 'dateInvalid': true };
        }
        if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
            return { 'dateInvalid': true };
        }
        if (month === 2) { // check for february 29th
            const isleap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
            if (day > 29 || (day === 29 && !isleap)) {
                return { 'dateInvalid': true };
            }
        }
        if (year !== currentTaxYear) {
            return { 'dateYearGreaterThanTaxYear': true };
        }
    }
    return null;
}


// Validator parterns
export const emailFormat = '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';
export const numberFormat = '[0-9]*';
export const numberFormat2Decima = '/^\d+\.\d{2}$/';
export const usernamePattern = '^[a-z0-9_-]{8,15}$';
export const charMin8Max15 = '^[a-z0-9_-]{8,15}$';
export const charMin3Max20 = '^[A-Za-z0-9_-]{3,20}$';
export const passwdPattern = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$';
export const mobileNumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
export const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
