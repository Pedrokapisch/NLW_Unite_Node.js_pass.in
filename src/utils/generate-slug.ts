export function generateSlug (text: string): string {
  return text
      .normalize("NFD") // Normaliza os caracteres para remover acentos
      .replace(/[\u0300-\u036f]/g, "") // Remove os caracteres acentuados
      .toLowerCase() // Converte para minúsculas
      .replace(/[^\w\s-]/g, "") // Remove caracteres não alfanuméricos, exceto espaços e hífens
      .replace(/[\s_-]+/g, "-") // Substitui espaços e hífens por um único hífen
      .replace(/^-+|-+$/g, ""); // Remove hífens extras do início e do fim
}

// Exemplo de uso
/*
const texto = "Texto com acentuação, símbolos e espaços!";
const slug = generateSlug(texto);
console.log(slug); // Saída: "texto-com-acentuacao-simbolos-e-espacos"
*/