# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



from datetime import timedelta, datetime

def generate_lead_scores(start_date, end_date, total_target, frequency, day_of_delivery):
    lead_scores = {}
    current_date = start_date
    leads_per_schedule = total_target // ((end_date - start_date).days // frequency + 1)
    remaining_leads = total_target % ((end_date - start_date).days // frequency + 1)

    while current_date <= end_date:
        if current_date.weekday() == day_of_delivery:
            lead_scores[current_date.strftime('%Y-%m-%d')] = leads_per_schedule

        current_date += timedelta(days=frequency)

    # Distribute remaining leads starting from the first scheduled date
    current_date = start_date
    while remaining_leads > 0:
        if current_date.weekday() == day_of_delivery:
            lead_scores[current_date.strftime('%Y-%m-%d')] += 1
            remaining_leads -= 1

        current_date += timedelta(days=frequency)

    return lead_scores

# Example usage:
start_date = datetime(2023, 1, 1)
end_date = datetime(2023, 12, 31)
total_target = 15
frequency = 7  # Number of days between each delivery
day_of_delivery = 2  # Assuming 0 is Monday, 1 is Tuesday, and so on

result = generate_lead_scores(start_date, end_date, total_target, frequency, day_of_delivery)
print(result)

