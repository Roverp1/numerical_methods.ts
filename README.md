# Numerical Methods

## Introduction

This project is an interactive web application built with React and TypeScript. It helps users learn and explore classical numerical methods such as the Bisection Method, Newton's Method, Lagrange Interpolation, and Polynomial Approximation. The app provides step-by-step calculations and visual graphing for better understanding of the methods.

While it was primarily created as a learning project and to fulfill a course assignment, the app’s interactive design and visual feedback make it a useful educational tool for both students and teachers.

## Project Goal

The goal of this application is to provide a simple and accessible way to experiment with basic numerical methods. It allows users to enter their own data, follow the steps of each algorithm, and observe how the results are calculated. The focus is on clarity and interaction, making it easier to understand how each method works in practice. This tool can improve understanding of the implemented methods by showing in real time how the input data affects the result of each computation.

## Review of Existing Solutions

There are several online tools that support numerical calculations. For example, WolframAlpha allows solving equations using methods like Newton's Method, but it doesn't show the steps clearly. Symbolab offers step-by-step solutions, but mostly for algebra and calculus, not for methods like Lagrange or polynomial approximation. Desmos is a great graphing calculator, but it doesn't support specific numerical methods.

This project focuses on giving users full control over the data, showing as much logic as possile behind each step, and visualizing the whole process interactively.

## Architecture Overview

The application is built using React with TypeScript. Each numerical method is implemented as a separate component, and routing is handled using React Router to switch between them. The app uses `mathjs` for evaluating mathematical expressions entered by user. For graph visualization, it uses the `function-plot` library, which renders the selected function and its root or approximation.

The user inputs and results are managed through React state, and the components are structured to keep logic and presentation separate, where each component consists of a pure logic typescript file and `.tsx` file for rendering. The project is fully client-side and does not require a backend.

## Implementation Details

### Bisection Method

The user provides the function `f(x)`, an interval `[a, b]`, and an acceptable error `ε`. The method checks the sign of the function at the endpoints and applies the standard bisection algorithm to find the root. At each step new `x0` value are shown. The graph displays the provided function.

### Newton's Method

This method takes a function `f(x)`, a starting point `x0`, and a precision value. The derivative is calculated automatically using `symmetricDifferenceQuotient`. The algorithm applies the Newton-Raphson formula iteratively and shows each computed `x` value. The function and the last computed points are visualized on the graph.

### Lagrange Interpolation

The user inputs a set of points (x, y). The app builds the Lagrange polynomial symbolically and displays the resulting formula. It also plots the interpolation curve and original points on the graph.

### Polynomial Approximation

The user enters a set of points and selects the degree of the polynomial. The app uses the Least Squares Method to compute the best-fitting polynomial. It shows the generated formula and plots both the curve and the original data points.

### Functional Programming

While implementing numerical methods I've tried making code as most functional as possible without sacrificing to much readability by trying to get rid of mutability. All of the following examples come from `src/shared/lib/least_squares_approximation.ts` - implementation of least squares algorithm and `src/shared/lib/lagrange_interpolation.ts` - implementation of Lagrange interpolation.

#### FP Examples

## Summary and Conclusions

The application successfully demonstrates how selected numerical methods work in practice. It allows users to input custom data, view step-by-step calculations, and observe the output both in text and graph form.

Separating the logic from the UI helped make the project more organized and easier to extend. Using libraries like `mathjs` and `function-plot` made it possible to focus on the algorithms and interaction instead of low-level rendering and parsing problems.

In the future, the app could be extended with more methods, support for systems of equations, and better error handling for incorrect input.

## Bibliography

- [Function-Plot documentation](https://mauriciopoppe.github.io/function-plot/)
- [MathJS documentation](https://mathjs.org/docs/)
- [Lagrange Interpolation | Lecture by Jeffrey Chasnov](https://www.youtube.com/watch?v=RpxoN9-i7Jc&t)
- [Least Squares Approximation | Lecture by Jeffrey Chasnov](https://www.youtube.com/watch?v=RlQBEhLhM8Y)
