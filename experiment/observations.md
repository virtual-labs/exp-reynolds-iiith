# Observations and Calculations

The Reynolds Experiment is performed to determine the nature of flow through a circular pipe by calculating the Reynolds number from experimentally measured quantities.

During the experiment, the volume of water collected and the corresponding collection time are measured. These observations are used to calculate the discharge, average flow velocity, Reynolds number, and finally the type of flow.

---

## Measured Data

The following quantities are measured during the experiment.

|         Parameter         | Symbol | Unit  |
| :-----------------------: | :----: | :---: |
| Volume of water collected | $V_c$  | m$^3$ |
|      Collection time      |  $t$   |   s   |
|       Pipe diameter       |  $D$   |   m   |

For water at room temperature,

$$
\rho=1000;kg/m^3
$$

$$
\mu=0.001;N.s/m^2
$$

---

## Calculation of Pipe Area

The cross-sectional area of the pipe is required to calculate the average velocity of flow.

$$
A=\frac{\pi D^2}{4}
$$

For

$$
D=0.025;m,
$$

$$
A=\frac{\pi(0.025)^2}{4}
$$

$$
A=4.91\times10^{-4};m^2
$$

---

## Calculation of Discharge

The discharge represents the volume flow rate through the pipe.

$$
Q=\frac{V_c}{t}
$$

For

$$
V_c=0.001;m^3
$$

and

$$
t=20;s,
$$

$$
Q=\frac{0.001}{20}
$$

$$
Q=5.0\times10^{-5};m^3/s
$$

---

## Calculation of Average Velocity

The average velocity of water flowing through the pipe is

$$
V=\frac{Q}{A}
$$

Using

$$
Q=5.0\times10^{-5};m^3/s
$$

and

$$
A=4.91\times10^{-4};m^2,
$$

$$
V=\frac{5.0\times10^{-5}}{4.91\times10^{-4}}
$$

$$
V=0.102;m/s
$$

---

## Calculation of Reynolds Number

The Reynolds number is calculated using

$$
Re=\frac{\rho VD}{\mu}
$$

Substituting,

$$
Re=\frac{1000\times0.102\times0.025}{0.001}
$$

$$
Re=2550
$$

---

## Identification of Flow Type

The calculated Reynolds number is used to determine the nature of flow.

| Reynolds Number |  Nature of Flow   |
| :-------------: | :---------------: |
|    $Re<2000$    |   Laminar Flow    |
| $2000<Re<4000$  | Transitional Flow |
|    $Re>4000$    |  Turbulent Flow   |

Since

$$
Re=2550,
$$

the flow is classified as

$$
\boxed{\text{Transitional Flow}}
$$

---

## Sample Calculation Summary

The calculations performed during the experiment follow the sequence:

1. Calculate the pipe area.

$$
A=\frac{\pi D^2}{4}
$$

2. Calculate the discharge.

$$
Q=\frac{V_c}{t}
$$

3. Calculate the average velocity.

$$
V=\frac{Q}{A}
$$

4. Calculate the Reynolds number.

$$
Re=\frac{\rho VD}{\mu}
$$

5. Identify the nature of flow using the Reynolds number.

---

## Sample Observation Table

| Trial | $V_c$ (m$^3$) | $t$ (s) | $Q$ ($10^{-5}$ m$^3$/s) | $V$ (m/s) | Reynolds Number |  Flow Type   |
| :---: | :-----------: | :-----: | :---------------------: | :-------: | :-------------: | :----------: |
|   1   |    0.0005     |   20    |          2.50           |   0.051   |      1275       |   Laminar    |
|   2   |    0.0010     |   20    |          5.00           |   0.102   |      2550       | Transitional |
|   3   |    0.0015     |   20    |          7.50           |   0.153   |      3825       | Transitional |
|   4   |    0.0020     |   20    |          10.00          |   0.204   |      5100       |  Turbulent   |

---

## Interpretation

The Reynolds number increases with the discharge and average velocity of flow. Small Reynolds numbers indicate smooth laminar flow, while larger values correspond to turbulent flow. The experimentally calculated Reynolds number provides a convenient criterion for identifying the flow regime inside the pipe.
