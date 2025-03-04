
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function PricingFAQ() {
  const faqs = [
    {
      question: 'Cosa succede dopo la fine del periodo di prova gratuito?',
      answer: 'Al termine del periodo di prova gratuito di 14 giorni, potrai scegliere uno dei nostri piani a pagamento per continuare a utilizzare DigiCatalog. Se non effettui alcuna scelta, il tuo account verrà automaticamente convertito in un piano Basic con funzionalità limitate ma sempre utilizzabile.'
    },
    {
      question: 'Posso cambiare piano in qualsiasi momento?',
      answer: 'Sì, puoi aggiornare o declassare il tuo piano in qualsiasi momento. Se passi a un piano superiore, l\'addebito viene calcolato proporzionalmente per il resto del periodo di fatturazione. Se passi a un piano inferiore, la modifica diventa effettiva all\'inizio del successivo periodo di fatturazione.'
    },
    {
      question: 'Cosa sono e come si utilizzano i crediti?',
      answer: 'I crediti sono una valuta interna che puoi utilizzare per acquistare funzionalità premium come modelli AR avanzati, traduzioni professionali o report personalizzati. I crediti non scadono mai e possono essere utilizzati in qualsiasi momento.'
    },
    {
      question: 'Quali metodi di pagamento accettate?',
      answer: 'Accettiamo tutti i principali metodi di pagamento, inclusi carte di credito/debito (Visa, Mastercard, American Express), PayPal, bonifico bancario e, per clienti aziendali, pagamento a fattura.'
    },
    {
      question: 'È necessario fornire una carta di credito per la prova gratuita?',
      answer: 'No, puoi iniziare la tua prova gratuita di 14 giorni senza fornire informazioni di pagamento. Ti chiederemo i dettagli di pagamento solo quando deciderai di passare a un piano a pagamento.'
    },
    {
      question: 'Offrite sconti per organizzazioni non profit o istituzioni educative?',
      answer: 'Sì, offriamo sconti speciali per organizzazioni non profit verificate e istituzioni educative. Contatta il nostro team commerciale per ulteriori informazioni e per verificare l\'idoneità della tua organizzazione.'
    },
    {
      question: 'Posso ottenere un rimborso se non sono soddisfatto?',
      answer: 'Offriamo una politica di rimborso di 30 giorni per tutti i piani pagati annualmente. Se non sei soddisfatto per qualsiasi motivo, puoi richiedere un rimborso completo entro i primi 30 giorni dall\'acquisto del piano annuale.'
    },
    {
      question: 'Cosa succede ai miei dati se cancello l\'account?',
      answer: 'Se decidi di cancellare il tuo account, tutti i tuoi dati verranno conservati per 30 giorni, durante i quali potrai ripristinare l\'account se cambi idea. Dopo 30 giorni, tutti i dati verranno eliminati definitivamente dai nostri server, in conformità con la nostra politica sulla privacy.'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Domande <span className="text-gradient">frequenti</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Risposte alle domande più comuni su prezzi, piani e fatturazione.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-gray-900 dark:text-white font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300">
            Hai altre domande? <a href="#contact" className="text-primary font-medium hover:underline">Contattaci</a>
          </p>
        </div>
      </div>
    </section>
  );
}
