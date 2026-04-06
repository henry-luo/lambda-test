# Math & LaTeX Notation Test

This file tests LaTeX / KaTeX math rendering in markdown.

## Inline Math

The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.

Euler's identity: $e^{i\pi} + 1 = 0$.

The binomial coefficient: $\binom{n}{k} = \frac{n!}{k!(n-k)!}$.

A partial derivative: $\frac{\partial f}{\partial x} = 2x + y$.

Greek letters: $\alpha$, $\beta$, $\gamma$, $\delta$, $\epsilon$, $\zeta$, $\eta$, $\theta$, $\lambda$, $\mu$, $\nu$, $\xi$, $\pi$, $\rho$, $\sigma$, $\tau$, $\phi$, $\chi$, $\psi$, $\omega$.

## Block Math

The Gaussian integral:

$$\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}$$

Maxwell's equations (Gauss's law):

$$\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}$$

The Schrödinger equation:

$$i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \left[-\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r},t)\right]\Psi(\mathbf{r},t)$$

General relativity (Einstein field equations):

$$G_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu}$$

Fourier transform:

$$\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x)\, e^{-2\pi i x\xi}\, dx$$

## Summations and Products

Sum of squares: $\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$

Infinite geometric series: $\sum_{n=0}^{\infty} r^n = \frac{1}{1-r}$ for $|r| < 1$

Product notation: $\prod_{i=1}^{n} x_i = x_1 \cdot x_2 \cdots x_n$

$$\sum_{k=0}^{\infty} \frac{(-1)^k}{2k+1} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots = \frac{\pi}{4}$$

## Matrices

$$A = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}$$

A 2×2 determinant: $\det\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$

## Limits and Calculus

$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

The fundamental theorem of calculus:

$$\int_a^b f'(x)\,dx = f(b) - f(a)$$

## Logic and Set Notation

Universal quantification: $\forall x \in \mathbb{R},\; x^2 \geq 0$

Existence: $\exists x \in \mathbb{N}: x > 100$

Set operations: $A \cup B$, $A \cap B$, $A \subseteq B$, $x \in S$, $S \setminus T$

Number sets: $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$

## Probability and Statistics

Bayes' theorem:

$$P(A \mid B) = \frac{P(B \mid A)\, P(A)}{P(B)}$$

Normal distribution PDF:

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$$

Expected value: $\mathbb{E}[X] = \sum_{x} x\, P(X = x)$

Variance: $\text{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2$

## Mixed Prose

When computing the **Big-O** complexity, note that $O(n \log n)$ is asymptotically faster than $O(n^2)$ but slower than $O(n)$.

The Taylor expansion of $e^x$ around $x=0$ is:

$$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$$

This converges for all $x \in \mathbb{R}$.
