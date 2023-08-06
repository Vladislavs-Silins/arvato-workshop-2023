# Demo for Arvato 2023 Workshop: Frontend Development Trends

Welcome to the "Demo for Arvato 2023 Workshop: 'Frontend Development in 2022'". This project showcases the pivotal trends and techniques shaping frontend development as of 2022.

## 📌 Main Routes and Features:

### 1. Grid (`/grid`)
A component dedicated to demonstrating the capabilities of modern grid layouts.

### 2. AVIF (`/avif`)
Showcases the new AVIF file format.

📜 **Disclaimer**:
AV1 Image File Format (AVIF) is an open, royalty-free image file format specification. It stores images or image sequences compressed with AV1 in the HEIF container format. While AVIF competes with HEIC (which uses HEVC for compression in the same container format), it was finalized in February 2019. Sample AVIF images were sourced from [this GitHub repository](https://github.com/link-u/avif-sample-images). For a deeper dive, visit the [official documentation](https://aomediacodec.github.io/av1-avif/testFiles/Link-U/).

### 3. Has (`/has`) and HasDivs (`/has-divs`)
Demonstration components that introduce and elucidate the workings of the `:has` CSS selector. The `Has` component uses the `:has` selector to highlight errors within input elements, while the `HasDivs` component illustrates the potential of the `:has` selector by integrating a parent with two child components.

### 4. Where (`/where`)
A tutorial component shedding light on the intricacies of using `:where` and `:is` selectors and the nuanced differences between them.

### 5. Container (`/container`)
Showcases the sheer power and flexibility of CSS query containers.

### 6. ViewTransitions (`/view-transitions`)
This microfrontend component exemplifies view transitions in a dynamic frontend environment. It also links to an extensive solution available [here](https://glitch.com/edit/#!/basic-view-transitions-api).

## 🚀 Getting Started

### Setup and Running the Project:

1. **Installation:** First, ensure you have `node` and `npm` installed. Then, navigate to the project root and run:
    ```
    npm install --legacy-peer-deps
    ```

2. **Starting the Development Server:** To start the project, run:
    ```
    npm run start
    ```

   This will start the development server and you can navigate to `http://localhost:4200/` to view the application.

### Additional Scripts:

- **Build**: Compile the project for production:
    ```
    npm run build
    ```

- **Rome Check All**: Using Rome, this command checks all files for formatting and linting issues:
    ```
    npm run rome-check-all
    ```

- **Rome Check**: Check a specific file (`view-transitions.component.ts` in this case) with Rome:
    ```
    npm run rome-check
    ```

- **Format**: Formats the codebase using Prettier:
    ```
    npm run format
    ```

- **Lint**: Run the linter on TypeScript files:
    ```
    npm run lint
    ```

- **Test**: Execute the test suites using Nx:
    ```
    npm run test
    ```

## About Rome:

**Rome** is a holistic tool for JavaScript, TypeScript, JSON, HTML, Markdown, and CSS. Designed to supersede tools like Babel, ESLint, webpack, Prettier, and Jest, Rome integrates functionalities previously scattered across multiple utilities. With a shared foundation, Rome offers a unified experience— from processing code, error displays, work parallelization, caching, to configuration.

Having strong conventions, Rome seeks to minimize configuration overhead. A salient aspect of Rome is its design in Rust, offering first-class IDE support. This is backed by an intricate parser representing source text with exceptional accuracy and state-of-the-art error recovery.

**Rome** is under the MIT license and upholds the [Contributor Covenant Code of Conduct](https://github.com/rome/tools/tree/main/CODE_OF_CONDUCT.md).

### Further Rome Resources:

- **Official Documentation**: Dive into Rome's [homepage](https://rome.tools) or go through the [Getting Started guide](https://docs.rome.tools/guides/getting-started/) for hands-on experience.

- **Technical Documentation**: For enthusiasts looking to unravel the inner workings of Rome, Rome's internal [Rust API Documentation](https://rustdocs.rome.tools) is a treasure trove.

---
