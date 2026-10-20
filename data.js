/* EDIT THIS FILE to change course content, schedule, flashcards and quiz. */
const COURSE={midterm:'2026-10-29',final:'2026-12-10'};
const CONCEPTS=[
{module:'Foundations',title:'Mean, median, standard deviation',summary:'Mean describes the arithmetic center; median is the middle ordered observation. Standard deviation measures typical spread around the mean.',formula:'mean = sum(x) / n; sample SD = sqrt(sum((x - mean)^2)/(n - 1))'},
{module:'Foundations',title:'DataFrames & visualization',summary:'Filter rows using Boolean conditions; choose a histogram for numerical distributions and a bar chart for categorical frequencies.',formula:'df[df["column"] > value]'},
{module:'Simulation',title:'Law of large numbers',summary:'As the number of independent repetitions increases, a sample average or proportion tends toward its expected value.',formula:'estimated probability = successful trials / total trials'},
{module:'Simulation',title:'Normal distribution',summary:'Convert a value to its standardized z-score to compare against a normal distribution.',formula:'z = (x - μ) / σ'},
{module:'Probability',title:'Complement and addition rules',summary:'Use the complement for “not”; use inclusion-exclusion for “A or B” to avoid double counting overlap.',formula:'P(not A) = 1 - P(A); P(A or B) = P(A) + P(B) - P(A and B)'},
{module:'Probability',title:'Multiplication & conditional probability',summary:'For dependent events, multiply the first probability by the conditional probability of the second. For independent events, multiply their individual probabilities.',formula:'P(A and B) = P(A) × P(B | A); P(A | B) = P(A and B) / P(B)'},
{module:'Probability',title:'Bayes’ theorem',summary:'Update the probability of a hypothesis after observing evidence.',formula:'P(A | B) = P(B | A) × P(A) / P(B)'},
{module:'Inference',title:'Standard error & confidence intervals',summary:'A standard error estimates sampling variability. Confidence intervals give a plausible range for a population parameter under model assumptions.',formula:'SE(mean) = s / sqrt(n); approximate 95% CI = estimate ± 1.96 × SE'},
{module:'Inference',title:'Hypothesis tests',summary:'A p-value is the probability, assuming the null model, of results at least as extreme as those observed. It is not the probability that the null is true.',formula:'p-value ≤ α → reject H₀'},
{module:'Modeling',title:'Correlation & regression',summary:'Correlation summarizes linear association, not causation. A regression slope estimates the expected change in y for a one-unit change in x.',formula:'predicted y = intercept + slope × x'}
];
const FLASHCARDS=[
['What is the complement rule?','P(not A) = 1 − P(A)'],['When do you multiply independent event probabilities?','When finding P(A and B): P(A) × P(B).'],['What does P(A | B) mean?','Probability of A given that B occurred.'],['How do you find a z-score?','Subtract the mean and divide by the standard deviation.'],['What does the law of large numbers predict?','Long-run averages approach their expected value.'],['Does correlation establish causation?','No. Association alone does not prove causation.'],['What does a p-value measure?','How extreme the data are under the null model.'],['What is standard error?','Estimated variability of a sample statistic.'],['What graph shows a numerical distribution?','A histogram.'],['What does Bayes’ theorem do?','Updates probabilities using observed evidence.'],['Probability of no sixes in four fair die rolls?','(5/6)^4 ≈ 0.4823'],['Probability of at least one success?','1 − P(no successes).'],['What is a sample mean?','The sum of observations divided by sample size.'],['What is the regression slope?','Predicted change in y per one-unit increase in x.']
];
const QUIZ=[
{q:'You flip a fair coin twice. What is P(no heads)?',options:['1/2','1/4','3/4','1/8'],answer:1,why:'No heads means tails twice: (1/2)² = 1/4.'},
{q:'Which formula gives P(A or B)?',options:['P(A) × P(B)','P(A) + P(B) − P(A and B)','P(A) / P(B)','1 − P(A and B)'],answer:1,why:'Subtract the overlap so it is not counted twice.'},
{q:'What does a z-score of +2 mean?',options:['Two observations','Two standard deviations above the mean','Two percent probability','Two standard deviations below the mean'],answer:1,why:'z measures standard deviations from the mean.'},
{q:'A box contains 6 red tickets out of 16. What is P(all four draws red), with replacement?',options:['(6/16)^4','4 × 6/16','6/16','1 − (6/16)^4'],answer:0,why:'With replacement, draws are independent.'},
{q:'Which statement about p-values is correct?',options:['They are P(H₀ is true)','They measure extremeness assuming H₀','They prove causation','They equal effect size'],answer:1,why:'The null hypothesis is assumed when calculating a p-value.'},
{q:'Which Python expression filters rows where score exceeds 80?',options:['df["score" > 80]','df[df["score"] > 80]','df.mean(80)','df[score = 80]'],answer:1,why:'Use a Boolean mask inside DataFrame brackets.'},
{q:'If P(A)=0.4, P(B)=0.5 and A,B are independent, P(A and B)=?',options:['0.9','0.1','0.2','0.4'],answer:2,why:'Multiply 0.4 × 0.5 = 0.2.'},
{q:'What does a correlation coefficient of −0.8 indicate?',options:['Strong negative linear association','Causation','No association','80% of outcomes caused'],answer:0,why:'The sign shows direction; magnitude shows linear strength.'}
];
const WEEKS=[
{title:'Oct 20–25 • Midterm foundations',items:['Audit Modules 3–4 and label weak topics','Redo probability and simulation homework without notes','Oct 24: timed mixed practice exam','Oct 25: correct and retry missed questions']},
{title:'Oct 26–29 • Midterm 2',items:['Oct 26: second timed practice set','Oct 27: 15–20 mixed problems','Oct 28: light review, error log and sleep','Oct 29: MIDTERM 2']},
{title:'Oct 30–Nov 1 • Reflect',items:['Review exam mistakes and update error log','Organize concepts and formulas for cumulative review']},
{title:'Nov 2–8 • Probability & distributions',items:['Review probability distributions and sampling','Practice Python simulations and distribution questions','Sunday: 30-minute cumulative recall quiz']},
{title:'Nov 9–15 • Inference',items:['Study sampling, confidence intervals and hypothesis tests','Solve interpretation questions without notes','Sunday: timed mixed question set']},
{title:'Nov 16–22 • Modeling',items:['Review regression, correlation and machine learning topics covered','Practice Python/DataFrame problems','Sunday: cumulative self-test']},
{title:'Nov 23–29 • Cumulative review I',items:['Review data exploration and descriptive statistics','Revisit Modules 1–2 and complete 20–30 problems','Update cheat sheet and error log']},
{title:'Nov 30–Dec 6 • Cumulative review II',items:['Revisit Modules 3–4 and prior errors','Dec 4–5: complete a timed comprehensive practice exam','Dec 6: repair weakest concepts']},
{title:'Dec 7–12 • Final stretch',items:['Dec 7: second comprehensive practice test','Dec 8: formula, Python and interpretation review','Dec 9: light review and full night of sleep','Dec 10: FINAL EXAM','Dec 11–12: rest and archive notes']}
];
const DEFAULT_RESOURCES=[{title:'UIUC Data Science Discovery',url:'https://discovery.cs.illinois.edu/'},{title:'UIUC Canvas',url:'https://canvas.illinois.edu/'},{title:'Mastery Platform',url:'https://mastery.cs.illinois.edu/'}];
