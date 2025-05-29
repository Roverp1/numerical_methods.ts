export function convertLatexToExpression(latex: string): string {
  return latex
    .replace(/\\cdot/g, "*")
    .replace(/\\frac{([^}]*)}{([^}]*)}/g, "($1)/($2)")
    .replace(/\\sqrt{([^}]*)}/g, "sqrt($1)")
    .replace(/\\sqrt\[([^\]]+)\]{([^}]*)}/g, "nthRoot($2, $1)")
    .replace(/\\pi/g, "pi")
    .replace(/\\alpha/g, "1")
    .replace(/\\beta/g, "1")
    .replace(/\\theta/g, "1")
    .replace(/\\sin/g, "sin")
    .replace(/\\cos/g, "cos")
    .replace(/\\tan/g, "tan")
    .replace(/\\log/g, "log")
    .replace(/\\ln/g, "log")
    .replace(/\\left/g, "")
    .replace(/\\right/g, "");
}
